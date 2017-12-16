package service

import (
	"encoding/json"
	"github.com/icedream/go-footballdata"
	"github.com/Tomaszenko/js-projekt2/src/models"
	"io/ioutil"
	"fmt"
	"os"
	"log"
	"github.com/jinzhu/gorm"
)

func GetAllFixturesFromApi() ([]*models.Fixture) {
	// Create client (optionally with auth token)
	client := new(footballdata.Client).
		WithToken("20af50d80fbf47d8bb3747cc5ae94aef")

	// Get list of seasons...
	fixtures, err := client.FixturesOfCompetition(467).Do()
	if err != nil {
		panic(err)
	}

	result := make([]*models.Fixture, 0)

	db, err := gorm.Open("postgres", "host=localhost user=postgres dbname=golang_db sslmode=disable password=abcd1234")
	if err != nil {
		panic("failed to connect database")
	}

	for i, fixture := range fixtures.Fixtures {

		var teamHome models.FootballTeam
		var teamAway models.FootballTeam

		db.Where(&models.FootballTeam{Name: fixture.HomeTeamName}).First(&teamHome)
		db.Where(&models.FootballTeam{Name: fixture.AwayTeamName}).First(&teamAway)

		var stage string

		if i == 63 {
			stage = "final"
		} else {
			if i == 62 {
				stage = "third-place"
			} else {
				if i >=60 && i <= 61 {
					stage = "semi-final"
				} else {
					if i >=56 && i <=59 {
						stage = "quarter-final"
					} else {
						if i>=48 && i<=55 {
							stage = "last-16"
						} else {
							stage = "group"
						}
					}
				}
			}
		}



		myFixture := models.Fixture{Id:i, Stage: stage, Date: fixture.Date,
		HomeGoals: int(fixture.Result.GoalsHomeTeam), AwayGoals: int(fixture.Result.GoalsAwayTeam),
		ExtraTime: false, Penalties:false}

		db.Create(&myFixture)
		myFixture.HomeTeamId = int(teamHome.Id)
		myFixture.AwayTeamId = int(teamAway.Id)
		myFixture.HomeTeam = teamHome
		myFixture.AwayTeam = teamAway

		db.Save(&myFixture)

		//db.Model(&myFixture).Related(&teamHome, "HomeTeam")
		//db.Model(&myFixture).Related(&teamAway, "AwayTeam")

		//db.Create(&myFixture).Related(&teamHome, "HomeTeam").Related(&teamAway, "AwayTeam")
		//db.Create(fixture).Related(&teamHome, "HomeTeam")

		log.Printf("%d vs %d", teamHome.Id, teamAway.Id)

		//if _, ok := footballTeams[fixture.HomeTeamName]; !ok {
		//	footballTeams[fixture.HomeTeamName] = len(footballTeams)
		//}
		//
		//if _, ok := footballTeams[fixture.AwayTeamName]; !ok {
		//	footballTeams[fixture.AwayTeamName] = len(footballTeams)
		//}

		//result = append(result, &models.Fixture{i,&models.FootballTeam{}
		//&api.FootballTeam{}})
	}

	var polska models.FootballTeam
	var meczePolski []models.Fixture

	db.Where(&models.FootballTeam{Name: "Poland"}).First(&polska)

	db.Where(&models.Fixture{HomeTeamId:int(polska.Id)}).Or(&models.Fixture{AwayTeamId:int(polska.Id)}).Find(&meczePolski)

	for _,mp := range meczePolski {
		log.Printf("%s vs %s", mp.HomeTeam.Name, mp.AwayTeam.Name)
	}

	return result
}

func GetFixturesForGroupFromApi(groupName string) {

}

func GetFixturesForStageFromApi(stage string) {

}

func GetAllTeams() {
	raw, err := ioutil.ReadFile("./data/teams.json")
	if err != nil {
		fmt.Println(err.Error())
		os.Exit(1)
	}

	resultArr := make([]*models.FootballTeam, 0)

	json.Unmarshal(raw, &resultArr)

	for i, team := range resultArr {
		log.Printf("%v %s", i, team.Name)
	}

	db, err := gorm.Open("postgres", "host=localhost user=postgres dbname=golang_db sslmode=disable password=abcd1234")
	if err != nil {
		panic("failed to connect database")
	}

	for _,team := range resultArr {
		db.Create(team)
	}
}
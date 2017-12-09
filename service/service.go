package service

import (
	"encoding/json"
	"github.com/icedream/go-footballdata"
	"github.com/Tomaszenko/js-projekt2/models"
	"io/ioutil"
	"fmt"
	"os"
	"log"
)

func GetAllFixturesFromApi() ([]*models.Fixture){
	// Create client (optionally with auth token)
	client := new(footballdata.Client).
		WithToken("20af50d80fbf47d8bb3747cc5ae94aef")

	// Get list of seasons...
	fixtures, err := client.FixturesOfCompetition(467).Do()
	if err != nil {
		panic(err)
	}

	result := make([]*models.Fixture, 0)

	footballTeams := make(map[string]int)

	for _, fixture := range fixtures.Fixtures {

		if _, ok := footballTeams[fixture.HomeTeamName]; !ok {
			footballTeams[fixture.HomeTeamName] = len(footballTeams)
		}

		if _, ok := footballTeams[fixture.AwayTeamName]; !ok {
			footballTeams[fixture.AwayTeamName] = len(footballTeams)
		}

		//result = append(result, &models.Fixture{i,&models.FootballTeam{}
		//&api.FootballTeam{}})
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
}
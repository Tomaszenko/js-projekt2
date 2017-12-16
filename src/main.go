package main

import (
	//"github.com/gin-gonic/gin"

	//"github.com/Tomaszenko/js-projekt2/api"
	//"github.com/Tomaszenko/js-projekt2/service"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/Tomaszenko/js-projekt2/src/models"
	"github.com/Tomaszenko/js-projekt2/src/service"
)

func main() {

	//router := gin.Default()

	//router.GET("/api/matches", api.GetMatches)
	//router.GET("/api/matches/phase/:phasename", GetMatchesOfPhase)
	//router.GET("/api/matches/group/:groupname", GetMatchesOfGroup)

	db, err := gorm.Open("postgres", "host=localhost user=postgres dbname=golang_db sslmode=disable password=abcd1234")
	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&models.FootballTeam{}, &models.Fixture{})
	defer db.Close()

	//service.GetAllTeams()

	service.GetAllFixturesFromApi()
	//router.Run(":8080")

	// ...and print them
	//for _, competition := range competitions. {
	//	fmt.Println(competition.HomeTeamName, competition.AwayTeamName)
	//}
}
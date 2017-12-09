package main

import (
	"github.com/gin-gonic/gin"

	"github.com/Tomaszenko/js-projekt2/api"
	"github.com/Tomaszenko/js-projekt2/service"
)

func main() {

	router := gin.Default()

	router.GET("/api/matches", api.GetMatches)
	//router.GET("/api/matches/phase/:phasename", GetMatchesOfPhase)
	//router.GET("/api/matches/group/:groupname", GetMatchesOfGroup)

	service.GetAllTeams()

	router.Run(":8080")

	// ...and print them
	//for _, competition := range competitions. {
	//	fmt.Println(competition.HomeTeamName, competition.AwayTeamName)
	//}
}
package api

import (
	"time"
	"github.com/gin-gonic/gin"
	"fmt"
	"github.com/Tomaszenko/js-projekt2/models"
)

func GetMatches(c* gin.Context) {
	stage := c.Query("stage")
	group := c.Query("group")
	fmt.Println(stage + group)
	arr := make([]*models.Fixture, 0)
	arr = append(arr, &models.Fixture{"1", &models.FootballTeam{1, "Rosja", make([]string, 0), "A"},
		&models.FootballTeam{2, "Arabia Saudyjska", make([]string, 0), "A"}, "grupa",
		time.Date(2018, time.June, 15, 20, 0, 0, 0, time.UTC),
		0, 0, false, 0,0,
		false, 0, 0})

	c.JSON(200, arr)
}

func GetMatchesOfPhase(c *gin.Context) {

}

func GetMatchesOfGroup(c *gin.Context) {

}
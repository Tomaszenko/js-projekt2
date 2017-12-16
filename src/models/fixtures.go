package models

import (
	"time"
	//"github.com/jinzhu/gorm"
	//"github.com/jinzhu/gorm"
)

type Fixture struct {
	//gorm.Model
	Id int `gorm:"primary_key" json:"id"`
	HomeTeam    FootballTeam `gorm:"ForeignKey:HomeTeamId;AssociationForeignKey:Id"` // use ProfileRefer as foreign key
	AwayTeam	FootballTeam `gorm:"ForeignKey:AwayTeamId;AssociationForeignKey:Id"`
	HomeTeamId int `json:"home" sql:"type:bigint REFERENCES football_teams(id)"`
	AwayTeamId int `json:"away" sql:"type:bigint REFERENCES football_teams(id)"`
	Stage string `json:"stage"`
	Date time.Time `json:"date"`
	HomeGoals int `json:"homeGoals"`
	AwayGoals int `json:"awayGoals"`
	ExtraTime bool `json:"wasExtraTime"`
	HomeGoalsExtraTime int `json:"homeGoalsExtraTime"`
	AwayGoalsExtraTime int `json:"awayGoalsExtraTime"`
	Penalties bool `json:"werePenalties"`
	HomeGoalsPenalties int `json:"homeGoalsPenalties"`
	AwayGoalsPenalties int `json:"awayGoalsPenalties"`
}


package models

import "time"

type Fixture struct {
	Id string `json:"id"`
	HomeTeam *FootballTeam `json:"home"`
	AwayTeam *FootballTeam `json:"away"`
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


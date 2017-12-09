package models

type FootballTeam struct {
	Id uint64 `json:"id"`
	Name string `json:"name"`
	Players []string `json:"players"`
	Group string `json:"group"`
}


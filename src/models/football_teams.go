package models

//import "github.com/jinzhu/gorm"

//import "github.com/jinzhu/gorm"

type FootballTeam struct {
	//gorm.Model
	Id uint64 `gorm:"primary_key" json:"id"`
	Name string `json:"name"`
	//Players []string `json:"players"`
	Group string `json:"group"`
	Fixtures []Fixture
}


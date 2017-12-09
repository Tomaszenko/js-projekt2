package utils

import (
	"encoding/json"

	"github.com/Tomaszenko/js-projekt2/service"
)

func saveAllTeamsToJson(filePath string) {
	service.GetAllFixtures()

	json.Marshal()
}
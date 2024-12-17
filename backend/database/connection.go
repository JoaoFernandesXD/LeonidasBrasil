package database

import (
	"api/models"
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func ConnectDB() *gorm.DB {

	db, err := gorm.Open(sqlite.Open("application.db"), &gorm.Config{})

	if err != nil {
		log.Fatal("Failed to connect to database: ", err)
	}

	// user model migrate
	db.AutoMigrate(&models.User{})

	return db

}
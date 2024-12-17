package main

import (
	"api/database"
	"api/routes"

	"github.com/gin-gonic/gin"
)

func main() {

	// Initialize database connection
	db := database.ConnectDB()

	// Router configuration
	router := gin.Default()

	// Register user routes
	routes.UserRoutes(router, db)

	// Starting server
	router.Run(":8080")
}
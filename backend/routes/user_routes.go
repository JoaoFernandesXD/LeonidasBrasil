package routes

import (
	"api/controllers"
	"api/repositories"
	"api/services"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func UserRoutes(router *gin.Engine, db *gorm.DB) {

	// Initialize repository, service and controller for users
	userRepo := repositories.UserRepository{DB: db}
	userService := services.UserService{Repo: userRepo}
	userController := controllers.UserController{Service: userService}

	userGroup := router.Group("/users")
	{
		userGroup.GET("/", userController.GetAllUsers)
		userGroup.POST("/", userController.CreateUser)
	}

}
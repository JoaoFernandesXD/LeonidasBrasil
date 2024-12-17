package services

import (
	"api/models"
	"api/repositories"
)

type UserService struct {
	Repo repositories.UserRepository
}

func (us *UserService) FindAll() ([]models.User, error) {
	return us.Repo.GetAll()
}

func (us *UserService) Create(user models.User) (models.User, error) {
	return us.Repo.Create(user)
}
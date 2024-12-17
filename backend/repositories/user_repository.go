package repositories

import (
	"api/models"

	"gorm.io/gorm"
)

type UserRepository struct{
	DB *gorm.DB
}

func (ur *UserRepository) GetAll() ([]models.User, error) {
	var users []models.User
	if err := ur.DB.Find(&users).Error; err != nil {
		return nil, err
	}

	return users, nil
}

func (ur *UserRepository) Create(user models.User) (models.User, error) {
	if err := ur.DB.Create(&user).Error; err != nil {
		return user, err
	}
	return user, nil
}
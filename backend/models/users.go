package models

import "time"

type User struct{
	Id uint `gorm:"primaryKey;autoIncrement" json:"customer_id"`
	Name string `json:"user_name"`
	Email string `json:"user_email" gorm:"unique"`
	Password string `json:"user_password"`
	CreatedAt time.Time
	UpdatedAt time.Time
}
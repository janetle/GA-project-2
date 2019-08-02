CREATE TABLE IF NOT EXISTS students (
	id SERIAL PRIMARY KEY,
	name TEXT,
	profile_pic TEXT
	
);

CREATE TABLE IF NOT EXISTS projects (
	id SERIAL PRIMARY KEY,
	teacher_ic TEXT,
	category TEXT,
	name TEXT,
	description TEXT
	);

CREATE TABLE IF NOT EXISTS student_project (
	
	student_id INT,
	project_id INT
	
);

CREATE TABLE IF NOT EXISTS quotes (
	
	id SERIAL PRIMARY KEY,
	quote TEXT
);

CREATE TABLE IF NOT EXISTS anouncement(
	
	id SERIAL PRIMARY KEY,
	anouncement TEXT
);
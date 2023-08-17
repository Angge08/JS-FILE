function Student_Information(name, age, course, section, year, StudentNumber,
    StudentStatus) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.section = section;
    this.year = year;
    this.StudentNumber = StudentNumber;
    this.StudentStatus = StudentStatus;
    }
    let studenta = new Student_Information("Angelica C. Delmendo", "21 years old",
    "BSCPE", 2, 2, "2021-05827-MN-0", "Regular");
    let studentb = new Student_Information("Jan Ruelle Teña", "22 years old", "BSCPE", 2,
    2, "2021-12345-MN-0", "Irregular");
    let studentc = new Student_Information("Ligaya Delmendo", "23 years old", "BSCPE", 2,
    3, "2021-01234-MN-0", "Regular");
    console.log(studenta);
    console.log(studentb);
    console.log(studentc);
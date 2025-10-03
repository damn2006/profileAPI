const { faker } = require('@faker-js/faker');

const createProfiles = (count = 1, gender, country) => {
    const profiles = [];

    for (let i = 0; i < count; i++) {
        const profileGender = gender || (Math.random() < 0.5 ? 'male' : 'female');
        const firstName = faker.person.firstName(profileGender === 'male' ? 'male' : 'female');
        const lastName = faker.person.lastName();
        const email = faker.internet.email();
        const age = faker.number.int({ min: 18, max: 70 });
        const avatar = `https://i.pravatar.cc/150?img=${faker.number.int({ min: 1, max: 70 })}`;
        const profession = faker.person.jobTitle();
        const bio = faker.lorem.sentence();

        profiles.push({
            firstName,
            lastName,
            age,
            email,
            avatar,
            profession,
            bio,
            country: country || faker.location.country()
        });
    }

    return profiles;
};

module.exports = { createProfiles };



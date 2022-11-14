import { v4 as uuidv4 } from "uuid";

export function getUsersParsed(originalUsersData) {
  // 1. Name - title, first name, last name.
  // 2. Email.
  // 3. User image - medium.
  // 4. Location - country, city, street.
  // 5. UUID/ID.
  return originalUsersData.map((userData) => ({
    id: userData.id.value ?? uuidv4(),
    image: userData.picture.medium,
    name: {
      title: userData.name.title,
      firstName: userData.name.first,
      lastName: userData.name.last,
    },
    email: userData.email,
    
    location: {
      country: userData.location.country,
      city: userData.location.city,
      street: `${userData.location.street.name} ${userData.location.street.number}`,
    },
  }));
}

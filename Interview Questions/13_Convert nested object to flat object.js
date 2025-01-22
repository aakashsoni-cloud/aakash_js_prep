// Convert nested object to flat object

/* 
{
  user_name: 'John';
  user_tech: 'frontend';
  user_address_home_add_1: 'home_dummy_add_1';
  user_address_home_add_2: 'home_dummy_add_2';
  user_address_office_add_1: 'off_dummy_add_1';
  user_address_office_add_2: 'off_dummy_add_2';
}
*/

const obj = {
  user: {
    name: "John",
    tech: "Frontend",
    address: {
      home: {
        add_1: "home_dummy_add_1",
        add_2: "home_dummy_add_2",
      },
      office: {
        add_1: "off_dummy_add_1",
        add_2: "off_dummy_add_2",
      },
    },
  },
};

const flatObject = (obj, parentKey = "", result = {}) => {
  if (typeof obj !== "object" && obj === null) return undefined;

  for (const [key, value] of Object.entries(obj)) {
    const newKey = parentKey ? `${parentKey}_${key}` : key;

    if (value && typeof value === "object" && !Array.isArray(value)) {
      flatObject(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }
  return result;
};

const flattened = flatObject(obj);

console.log(flattened);

const flatObjectWithReduce = Object.keys(flattened).reduce((acc, keys) => {
  acc[keys.replace(/([A-Z])/g, "_$1").toLowerCase()] = flattened[keys];
  return acc;
}, {});

console.log(flatObjectWithReduce);

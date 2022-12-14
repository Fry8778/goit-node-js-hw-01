const fs = require('fs').promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
    try {
        const contacts = await fs.readFile(contactsPath);
        return JSON.parse(contacts);        
    } catch (error) {
        console.log(error);
    }     
  }
  
  async function getContactById(contactId) {
    try {
        const contacts = await listContacts();
        const contactById = contacts.find((contact) => contact.id === contactId);
        if (!contactById) {
            throw "The contact with such ID not found";
        }
        return contactById;
    } catch (error) {
        console.log(error);
    }  
  }
  
  async function removeContact(contactId) {
    try {
        const contacts = await listContacts();
        const index = contacts.findIndex((contact) => contact.id === contactId);
    
        if (index === -1) {
            throw "The contact with such ID not found";
        }
        const [result] = contacts.splice(index, 1);
        fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));  
        return result;
    } catch (error) {
      console.log(error);
    }
  }
  
  async function addContact(name, email, phone) {
   try {
        const contacts = await listContacts();
        const newContact = {
            id:uuidv4(),
            name,
            email,
            phone,
        };
        contacts.push(newContact);
        fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
        return newContact;    
   } catch (error){
   console.log(error);
   }
  }

  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  };
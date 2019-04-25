// __filename, __dirname built in

const path = require('path')

// output the directory path of the file
console.log(path.dirname(__filename))
// both of htese output the extension of the file .js
console.log(path.basename(__filename).slice(-3) == path.extname(__filename))
// concatinate the current path to /public/indew.html
console.log(path.join(__dirname, 'public', 'index.html'))
// outputs the path object nicely formatted with root , dir , base , ext , name objects
console.log(path.parse(__filename))
// Returns a path string from an object (so i gave it the parse func as an obj) - the opposite of parse.
console.log(path.format(path.parse(__filename)))
// output the delimiter / \ ; etc...
console.log(path.delimiter)

const os = require('os')
// Home dir
console.log(os.homedir())
// Platform
console.log(os.platform())
// CPU Arch
console.log(os.arch())
// CPU Core Info
console.log(os.cpus())
// Free memory
console.log(os.freemem())
// Total memory
console.log(os.totalmem())
// Uptime
console.log(os.uptime())

const url = require('url')
// const URL = require('url').URL;
/* NOTE: if you are using v6 (LTS), line 1 gives errors,
 *   if you get an error saying, TypeError: URL is not a constructor,
 *  comment line 1, and uncomment line 2 */

const site = new URL('https://www.codetalk.com:8000?id=100&statut=active')
// output the full link (both of em)
console.log(site.href == site.toString())
// the root path of the site / , /home , etc...
console.log(site.pathname)
// output the domaine name with the port
console.log(site.host)
// output the domaine name without the port
console.log(site.hostname)
// search query string
console.log(site.search)
// search param query object
console.log(site.searchParams)
// adding params query to the url
const newParam = site.searchParams.append('name', 'code')
console.log(site.searchParams)
// looping through them with foreach
site.searchParams.forEach((value, key) => {
  console.log(`${value} : ${key}`)
})

const fs = require('fs')
// create a folder with mkdir it takes the directory path of the new folder + an object + callback
/*
fs.mkdir(path.join(__dirname, '/fsfolder'), {}, err => {
  if (err) throw err
  console.log('folder created...')
})
*/
// create and write to a file path to the file + text + callback
/*
fs.writeFile(
  path.join(__dirname, '/fsfolder/fsfile.txt'),
  'hello world!',
  err => {
    if (err) throw err
    console.log('file created and written to it...')
  }
)
*/
// append text
/*
fs.appendFile(
  path.join(__dirname, '/fsfolder/fsfile.txt'),
  ' this an appened text;',
  err => {
    if (err) throw err
    console.log('adding extra text...')
  }
)
*/
// read file path + typeofcontent (utf8,json,ascii ..) + callback
/*
fs.readFile(
  path.join(__dirname, '/fsfolder/fsfile.txt'),
  'utf8',
  (err, data) => {
    if (err) throw err
    console.log(data)
  }
)
*/
// rename file : path + newpath with new name + callback
/*
fs.rename(
  path.join(__dirname, '/fsfolder/fsfile.txt'),
  path.join(__dirname, '/fsfolder/fsfilerenamed.txt'),
  err => {
    if (err) throw err
    console.log('file renamed...')
  }
)
*/
// WRITE THE FOLLOWING USERS NAME IN  A FILE  AND THEN DISPLAY THEM
const users = [
  { name: 'Kaddy' },
  { name: 'Marc' },
  { name: 'Prince' },
  { name: 'Kally' }
]

// create folder
fs.mkdir(path.join(__dirname, '/fsfolder2'), {}, err => {
  if (err) throw err

  console.log('Folder created ...')

  // create file and write json data
  fs.writeFile(
    path.join(__dirname, '/fsfolder2', 'name.json'),
    JSON.stringify(users),
    err => {
      if (err) throw err

      console.log('File created and data written ...')

      // read file
      fs.readFile(
        path.join(__dirname, '/fsfolder2', 'name.json'),
        'utf8',
        (err, userData) => {
          if (err) throw err

          // display user name
          JSON.parse(userData).forEach(user => {
            console.log(user.name)
          })

          // display successful message
          console.log('Users name displayed ...')

          // rename the file
          fs.rename(
            path.join(__dirname, '/fsfolder2', 'name.json'),
            path.join(__dirname, '/fsfolder2', 'users.json'),
            err => {
              if (err) throw err

              // display successful message
              console.log('File rename completed ...')
            }
          )
        }
      )
    }
  )
})
// delete a folder
// NOTE : you must create a folder named "myFolderToDelete".
// NOTE : myFolderToDelete must be an empty folder.
fs.rmdir(path.join(__dirname, '/fsempty'), err => {
  if (err) throw err

  console.log('Folder deleted ...')
})

const event = require('events')
const http = require('http')
const uuid = require('uuid')
// nodejs has module.export function that helps on getting code from other js files like
// for expl we have a class person in person.js w can send it anywhere by module.export
// and retrieve it by a require

const Person = require('./basic/person')

const person = new Person('amine hammou', 26)
// console.log(person.getName())

// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin (x) {
    if (x.userRole === `ADMIN`) {
    return true
    } else {
    return false
    }
}

function getEmail (email) {
    x = ''
    x = email.firstName.toLowerCase() + `.` + email.lastName.toLowerCase() + `@codeimmersives.com`
    return x
}

function getPlaylistLength (playlist) {
    return playlist.songs.length
}

function getHardestHomework (hw) {
let x = ''
if (hw.length === 0) {
    return x
}   else {
    let y = hw[0].averageScore
    let t = hw[0].name
    for (let i = 0; i < hw.length; i++) {
        let z = hw[i].averageScore
        if (y > z) {
        y = z
        t = hw[i].name
        }
        } 
        return t
    }
}

function createPhonebook(x,y) {
    if (x === [] && y === []) {
        return [], []
    }
    let Phonebook = {}
    for (i = 0; i < x.length; i++) {
        Phonebook[x[i]] = y[i]
    } return Phonebook
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};
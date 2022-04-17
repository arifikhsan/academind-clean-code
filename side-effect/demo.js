function connectDatabase() {
  const didConnect = database.connect();
  if (didConnect) {
    return true;
  } else {
    // unwanted side effect karena tidak perlu ada console log. 
    // harusnya pakai throw
    console.log('Could not connect to database!'); 
    return false;
  }
}

// tidak ada unwanted atau unexpected side effect
function determineSupportAgent(ticket) {
  if (ticket.requestType === 'unknown') {
    return findStandardAgent();
  }
  return findAgentByRequestType(ticket.requestType);
}

// unwanted side effect karena isValid tidak diharapkan ada console.log. 
// harusnya mengembalikan boolean saja
function isValid(email, password) {
  if (!email.includes('@') || password.length < 7) {
    console.log('Invalid input!');
    return false;
  }
  return true;
}

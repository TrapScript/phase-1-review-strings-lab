// Write your code in this file!
const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook,  + ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser}`;

function distanceFromHqInBlocks(beginning, end) {
    return end - beginning;
}
function distanceFromHqInFeet(distanceInFeet) {
    distanceFromHqInBlocks(x);
    return x * 264;
}

function distanceTravelledInFeet(start, destination) {
    return (destination-start)* 264
    
}

function calculatesFarePrice(start, destination) {
    if(distanceTravelledInFeet <= 400) {
        return 'Free';
        
    }
    else if(distanceTravelledInFeet > 400 && distanceTravelledInFeet <= 2000) {
        return 'the price is 2 cents';
    }
    else if(distanceTravelledInFeet > 2000 && distanceTravelledInFeet < 2500) {
        return 'the scuber charges a flat rate';
        
        
    }
    else if(distanceTravelledInFeet > 2500) {
        return "cannot travel that far";

    
}

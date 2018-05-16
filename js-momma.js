let discipline = (offense, punishment) => {
  let count = 0;
  let warn = "No, sweetie, you can't.";
  let punish = `This is the third time. ${punishment}`;
  
  return () => {
    let times = count;
    count++;

    return count < 3 ? warn : punish;
  }
}

let childOffense = () => "*asks for Lego set at the store.*";
let childPunishment = "You can't play with your Legos at home for the next week.";

let wiseMom = discipline(childOffense, childPunishment);

wiseMom();
// => "No, sweetie, you can't."

wiseMom();
// => "No, sweetie, you can't."

wiseMom();
// => "This is the third time. You can't play with your Legos at home for the next week."
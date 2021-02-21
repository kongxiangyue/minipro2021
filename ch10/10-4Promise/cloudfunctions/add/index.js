exports.main = async (event, context) => {
return{add:Number(event.a)+Number(event.b)}
}
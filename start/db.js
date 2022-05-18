import mongoose from 'mongoose';

export default function () {
  mongoose
    .connect(
      'mongodb+srv://job-task:PtiI0aeWia2SaDaY@cluster0.cws44.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(() => {
      console.clear();
      console.log('connect successfully');
    })
    .catch((error) => {
      console.log(
        'Enternal server Error. Server stoped with error code ',
        error.code
      );
    });
}

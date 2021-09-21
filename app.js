const { ObjectID } = require("bson");
const { MongoClient } = require("mongodb");

//?connect database Local
// const uri = "mongodb://127.0.0.1:27017"; //todo Database tersimpan di local mongodb bukan diatlas dan kita berusaha untuk mengkoneksikan db local dengan aplikasi kita
// const dbName = "wpulocal";

//?connect database atlas ,masuk ke pilihan connect cluster melalui application
const uri =
  "mongodb+srv://Roy:Siaga1234@cluster0.whxlq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const dbName="myFirstDatabase"



// const client = new MongoClient(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((error, client) => {
  if (error) {
    return console.log("koneksi gagal"); //jika error langsung berhentikan functionnya dengan memberikan return koneksi gagal
  }                                    //? jangan lupa kalau connect atlas harus masuk dulu dengan url monggoshel habis itu keluar dan connect lagi terus pilih aplication untuk connect nodejs dengan mongodbatlas sehingga dapat url baru yg dicopykan ke const uri  
//   console.log('koneksi berhasil')  //?tinggal uncomment no 1 ini kalau mau cek koneksi

  //pilih data base => terhubung ke database local kita   
  const db = client.db(dbName);             //?tinggal comment no 2 ini kalau mau cek koneksi
                                            //?tinggal comment no 3 pilihlah salah satu methodnya (CRUD)

  //1)menambahkan 1 data ke collection mahasiswa

//     db.collection("mahasiswa").insertOne(
//       {   //*(parameter1)                  parameter 1 data yg mau dimasukin,parameter ke 2 call back function ketika error ngapain dan ketika berhasil ngapain
//         nama: "erik",
//         email: "erik@gmail.com",
//       },
//       (error, result) => { //*(parameter2)
//         if (error) {
//           return console.log("Gagal menambahkan data");
//         }
//         console.log(result);
//       }
//   )

  //1A)C. Create :menambahkan lebih dari 1 database
  //   db.collection("mahasiswa").insertMany(
  //     [
  //       {
  //         nama: "erik",
  //         email: "erik2@gmai.com",
  //       },
  //       {
  //         nama: "Bintang",
  //         email: "Bintang@gmai.com",
  //       },
  //     ],
  //     (error, result) => {
  //       if (error) {
  //         return console.log("Gagal menambahkan data");
  //       }
  //       console.log(result);
  //     }
  //   );

  //2)R. Read : Menampilkan semua data yang ada di collection/tabel mahasiswa

  //   console.log(
  //     db
  //       .collection("mahasiswa")
  //       .find()
  //       .toArray((err, result) => { //to array mengubah data object besar menjadi ke dlm bentuk array
  //         console.log(result);//result itu data yg kita inginkan untuk ditampilkan
  //       })
  //   );

  //2A) menampilkan data berdasarkan kriteria
  // //!tingggal memasukkan kriteria kedalam find bisa difilter berdasarkan nama atau objectID
  // console.log(
  //         db
  //           .collection("mahasiswa")
  //           .find({nama:"angga"}) //menampilkan mahasiswa berdasarkan nama angga saja
  //           .toArray((err, result) => {
  //             console.log(result)
  //           })
  //       )

  //3)U. Update : Mengubah data berdasarkan kriteria ID  (cara ini tidak menampilkan kalau error dan berhasil diterminal)
  // db.collection('mahasiswa').updateOne(
  //     {
  //         _id : ObjectID("6149070e9ced0c4b0101f926")
  //     },
  //     {
  //         $set :{
  //             nama : "Bimbim"
  //         }
  //     }
  // )

  //3A) dengan mengubah fungsi ke dalam variable lalu di buat pengkondisian
  //   const promiseUpdate = db.collection("mahasiswa").updateOne(
  //     {
  //       _id: ObjectID("6149070e9ced0c4b0101f926"),
  //     },
  //     {
  //       $set: {
  //         email: "Bimbim@yahoo.com",
  //       },
  //     }
  //   );

  //   promiseUpdate
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //3B mengubah data lebih dari 1 ,nama "Tohir guys" lebih dari 1 ,setiap yg namanya "Tohir guys" diganti jadi akhlak
  // const promiseUpdate = db.collection("mahasiswa").updateMany(
  //     {
  //     nama: "Tohir guys",
  //     },
  //     {
  //     $set: {
  //         nama: "Akhlak",
  //     },
  //     }
  // );
  // promiseUpdate
  //     .then((result) => {
  //     console.log(result);
  //     })
  //     .catch((error) => {
  //     console.log(error);
  //     });

  //4) D. Delete :menghapus 1 data
//   db.collection("mahasiswa")
//     .deleteOne({
//       _id: ObjectID("6149099136e65f4b7252edae"), //! ObjectId diganti ke ObjectID biar ga error
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//     //4A) delete lebih dari 1

    db.collection("mahasiswa")
    .deleteMany({
      nama: "erik"
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });




});

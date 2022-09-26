//import the models
const student = require('../models/student');
const interviews = require('../models/interview');
//import the module for csv file
const {Parser} = require('json2csv');

//for add new student 
module.exports.addStudent = function(req, res){
          student.create(req.body);
          return res.redirect('back');
}

//for access placement page
module.exports.placement = async function(req, res){
          let students = await student.find({});
          interviews.find({}, function(err, interviews){
                    if(err){
                              console.log(err);
                              return;
                    }
                    return res.render('placementCell',{
                              interviews: interviews,
                              students: students,
                              isAuthenticate : true,
                              email : req.cookies.user_Id
                    });
          });
}

//add new interview
module.exports.addInterview = function(req, res){
          interviews.create(req.body);
          return res.redirect('/');
}

//download the student data
module.exports.download =  function(req, res){
          interviews.find({}, function(err, documents){
                    if(err){console.log('error in download', err); return;}
                    
                    const Data = [];
                    for(let x of documents){
                              let tempData = {};
                              tempData['Company Name'] = x.companyName;
                              tempData['Student Name'] = x.studentName;
                              tempData['Result'] = x.result;
                              tempData['Date'] = x.date;

                              let stu = student.findOne({studentName: x.studentName});
                              tempData['college Name'] = stu.college;
                              tempData['batch'] = stu.batch;
                              tempData['dsa_score'] = stu.dsa;
                              tempData['webD_score'] = stu.webD;
                              tempData['react Score'] = stu.react;
                              Data.push(tempData);
                    }
                    //console.log('studentCOntroller 50');
                    const header = ['Company Name', 'Student Name', 'Result', 'Date','college Name', 'batch', 'dsa_score', 'webD_score', 'react_score'];
                    const parser = new Parser({header});
                    //console.log('studentCOntroller 53');
                    const csv = parser.parse(Data);
                    console.log('studentCOntroller 55');
                    res.attachment('CellData.csv');
                    res.status(200).send(csv);
          });
}
import ExcelJs from 'exceljs'
import { response } from 'express'
import data from '../data/data.js'

function Export(app){
    app.get('/api/sheet',(req, res) => {
        try{
            const workBook = new ExcelJs.Workbook()
            const sheet = workBook.addWorksheet('users data')
            
            sheet.columns = [
                {header:'ID', key:'id', width:10},
                {header:'First Name', key:'firstName', width:15},
                {header:'Last Name', key:'lastName', width:15},
                {header:'Username', key:'userName', width:25},
                {header:'Gender', key:'gender', width:10},
                {header:'E-mail', key:'email', width:25},
                {header:'Address', key:'address', width:25},
                {header:'Choice', key:'choice', width:10},
                {header:'Learn', key:'learn', width:10},
                {header:'Teach', key:'teach', width:10}
            ]
            
            sheet.getCell('A1').value = 'My Excel Sheet'
            data.forEach(user => {
                sheet.addRow(user)
            })

            sheet.getRow(1).height = 40;

            // css style for selected column   and only for row 1
            sheet.getRow(1).getCell(1).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0' }}
            sheet.getRow(1).getCell(2).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0' }}
            sheet.getRow(1).getCell(3).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0' }}
            sheet.getRow(1).getCell(4).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0' }}
            sheet.getRow(1).getCell(5).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0' }}
            sheet.getRow(1).getCell(6).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0' }}
            sheet.getRow(1).getCell(7).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0' }}
            sheet.getRow(1).getCell(8).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0' }}
            sheet.getRow(1).getCell(9).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0' }}
            sheet.getRow(1).getCell(10).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0'}}

            // css style      for each row      and       for each column
            sheet.eachRow({ includeEmpty: true }, function(row, rowNumber){
                row.eachCell(function(cell, colNumber){
                 cell.font = {
                   name: 'Arial',
                   family: 2,
                //    bold: false,
                //    color: {argb: "004e47cc"},
                   size: 10,
                 };
                 cell.alignment = {
                   vertical: 'middle', horizontal: 'center'
                 };
                //  if (rowNumber <= 10) {
                //    row.height = 20;
                //    cell.font = {
                //      bold: true,
                //    };
                //   }
                //   if (rowNumber >= 10) {
                //    for (var i = 1; i < 14; i++) {
                //      if (rowNumber == 10) {
                //        row.getCell(i).fill = {
                //          type: 'pattern',
                //          pattern:'solid',
                //          fgColor:{argb:'C7C7C7'}
                //        };
                //      }
                //      row.getCell(i).border = {
                //      top: {style:'thin'},
                //      left: {style:'thin'},
                //      bottom: {style:'thin'},
                //      right: {style:'thin'}
                //    };
                //  }
                // }
               });
              });

              // css style for each column   and only for row 1
              sheet.getRow(1).eachCell((cell, cellNumber) => {
                cell.font = {
                    color: {argb: "ffffff"},
                    bold: true
                }
              })

            let filename = `users${Math.floor(Math.random() * 50)}.xlsx`
            workBook.xlsx.writeFile(filename).then((response) =>{
                res.send('Excel Created')
            })
        }catch(error){
            console.log(error)
            res.send(error)
        }   
   
    })
}

export default Export
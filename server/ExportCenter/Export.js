import ExcelJs from 'exceljs'
import data from '../data/data.js'

function Export(app){
    app.get('/api/sheet',(req, res) => {
        try{
            const workBook = new ExcelJs.Workbook()
            const sheet = workBook.addWorksheet('users data')
            
            // set column 
            sheet.columns = [
                {key:'id', width:10},
                {key:'firstName', width:15},
                {key:'lastName', width:15},
                {key:'userName', width:25},
                {key:'gender', width:10},
                {key:'email', width:25},
                {key:'address', width:25},
                {key:'choice', width:10},
                {key:'learn', width:10},
                {key:'teach', width:10},
                {key:'date', width:15}
            ]

            // add empty row before title
            sheet.addRow();

            // add title 
            sheet.addRow({ firstName: 'Users List'});

            // merge two column
            sheet.mergeCells('B2:C2');

            // set height for title column
            sheet.getRow(2).height = 30

            // add some style for title 
            sheet.getRow(2).getCell(2).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0' }}

            // add empty row after title and before header column
            sheet.addRow();
        
            // add header column for data
            sheet.addRow({
                id: 'ID', 
                firstName: 'First Name', 
                lastName: 'Last Name', 
                userName: 'Username', 
                gender: 'Gender', 
                email: 'E-mail', 
                address: 'Address',
                choice: 'Choice',
                learn: 'Learn',
                teach: 'Teach',
                date: 'Date'
            });

            // set height for db data header column
            sheet.getRow(4).height = 40;

            // add database data (all row)
            data.forEach(user => {
                // sheet.addRow(user)
                sheet.addRow({
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    userName: user.userName,
                    gender: user.gender,
                    email: user.email,
                    address: user.address,
                    choice: user.choice,
                    learn: user.learn,
                    teach: user.teach,
                    date: new Date(1970,1,1)
                });
            })

            /* css style for selected column   and only for row 1 */
            sheet.getRow(4).getCell(1).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0' }}
            sheet.getRow(4).getCell(2).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0' }}
            sheet.getRow(4).getCell(3).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0' }}
            sheet.getRow(4).getCell(4).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0' }}
            sheet.getRow(4).getCell(5).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0' }}
            sheet.getRow(4).getCell(6).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0' }}
            sheet.getRow(4).getCell(7).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0' }}
            sheet.getRow(4).getCell(8).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0' }}
            sheet.getRow(4).getCell(9).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0' }}
            sheet.getRow(4).getCell(10).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0'}}
            sheet.getRow(4).getCell(11).fill = {type: 'pattern', pattern: 'solid',fgColor: { argb:'5F9EA0'}}

            // css style      for each row      and       for each column
            sheet.eachRow({ includeEmpty: true }, function(row, rowNumber){
                row.eachCell(function(cell, colNumber){
                 cell.font = {
                   name: 'Arial',
                   family: 2,
                   bold: false,
                //    color: {argb: "004e47cc"},
                   size: 10,
                 };
                 cell.alignment = {
                   vertical: 'middle', horizontal: 'center'
                 };
               });
            });

            // css style for each column   and only for row 1
            sheet.getRow(4).eachCell((cell, cellNumber) => {
                cell.font = {
                    color: {argb: "ffffff"},
                    bold: true
                },
                cell.border = {
                    top: {style:'thin'},
                    left: {style:'thin'},
                    bottom: {style:'thin'},
                    right: {style:'thin'}
                }
            })

            // apply css only for a specific cell
            sheet.getCell('B2').font = { name: 'Comic Sans MS',family: 4,size: 25, underline: true,bold: true, color: {argb: "ebeef2"} };

            // make dynamic file name
            let filename = `users${Math.floor(Math.random() * 50)}.xlsx`

            // write file
            workBook.xlsx.writeFile(filename).then((response) =>{
                res.send('Excel Created')
            })

        }catch(error){
            console.log(error)
            res.status(500).send(error)
        }   
   
    })
}

export default Export
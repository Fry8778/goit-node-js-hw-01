# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
https://monosnap.com/file/Myah7zcbRmepJ3UdmpvmDqTGtFNTJT

# Получаем контакт по id
node index.js --action get --id 5
https://monosnap.com/file/nUQy1FGuHM4OZDQKb0al3TQo3TE56s

# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/jkFm7j4YDEhsMsEC2xJIZla9mSYKEX

# Удаляем контакт
node index.js --action remove --id=3
https://monosnap.com/file/1cLOBy4v6PvlcgxL21IKgh4SFDeDnW
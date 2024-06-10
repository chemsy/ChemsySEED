const readlineSync = require("readline-sync");
const fs = require("fs");
const delay = require("delay");
var fetch = require("node-fetch");
var chalk = require("chalk");
const {
    table
} = require('table');
var machineIdSync = require('node-unique-machine-id');
const path = require('path');
const moment = require('moment');

function checkProfile(cookie) {
    const index = fetch('https://elb.seeddao.org/api/v1/profile', {
            headers: {
                'Host': 'elb.seeddao.org',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:126.0) Gecko/20100101 Firefox/126.0',
                'Accept': 'application/json, text/plain, */*',
                'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
                'Accept-Encoding': 'gzip, deflate, br',
                'Referer': 'https://cf.elb.seeddao.org/',
                'Telegram-Data': cookie,
                'Origin': 'https://cf.elb.seeddao.org',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-site',
                'Te': 'trailers'
            }
        })

        .then(async (res) => {
            const data = await res.json();
            return data;
        });

    return index;
}

function checkTask(cookie) {
    const index = fetch('https://elb.seeddao.org/api/v1/tasks/progresses', {
            headers: {
                'Host': 'elb.seeddao.org',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:126.0) Gecko/20100101 Firefox/126.0',
                'Accept': 'application/json, text/plain, */*',
                'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
                'Accept-Encoding': 'gzip, deflate, br',
                'Referer': 'https://cf.elb.seeddao.org/',
                'Telegram-Data': cookie,
                'Origin': 'https://cf.elb.seeddao.org',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-site',
                'Te': 'trailers'
            }
        })

        .then(async (res) => {
            const data = await res.json();
            return data;
        });

    return index;
}

function checkTaskHoly(cookie) {
    const index = fetch('https://elb.seeddao.org/api/v1/upgrades/tasks/progresses', {
            headers: {
                'Host': 'elb.seeddao.org',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:126.0) Gecko/20100101 Firefox/126.0',
                'Accept': 'application/json, text/plain, */*',
                'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
                'Accept-Encoding': 'gzip, deflate, br',
                'Referer': 'https://cf.elb.seeddao.org/',
                'Telegram-Data': cookie,
                'Origin': 'https://cf.elb.seeddao.org',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-site',
                'Te': 'trailers'
            }
        })

        .then(async (res) => {
            const data = await res.json();
            return data;
        });

    return index;
}

function checkBalance(cookie) {
    const index = fetch('https://elb.seeddao.org/api/v1/profile/balance', {
            headers: {
                'Host': 'elb.seeddao.org',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:126.0) Gecko/20100101 Firefox/126.0',
                'Accept': 'application/json, text/plain, */*',
                'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
                'Accept-Encoding': 'gzip, deflate, br',
                'Referer': 'https://cf.elb.seeddao.org/',
                'Telegram-Data': cookie,
                'Origin': 'https://cf.elb.seeddao.org',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-site',
                'Te': 'trailers'
            }
        })

        .then(async (res) => {
            const data = await res.json();
            return data;
        });

    return index;
}

function claimTask(cookie, taskid) {
    const index = fetch('https://elb.seeddao.org/api/v1/tasks/' + taskid + '', {
            method: 'POST',
            headers: {
                'Host': 'elb.seeddao.org',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:126.0) Gecko/20100101 Firefox/126.0',
                'Accept': 'application/json, text/plain, */*',
                'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
                'Accept-Encoding': 'gzip, deflate, br',
                'Referer': 'https://cf.elb.seeddao.org/',
                'Telegram-Data': cookie,
                'Origin': 'https://cf.elb.seeddao.org',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-site',
                'Te': 'trailers'
            }
        })

        .then(async (res) => {
            const data = await res.json();
            return data;
        });

    return index;
}

function claimTaskHoly(cookie, taskid) {
    const index = fetch('https://elb.seeddao.org/api/v1/upgrades/tasks/' + taskid + '', {
            method: 'POST',
            headers: {
                'Host': 'elb.seeddao.org',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:126.0) Gecko/20100101 Firefox/126.0',
                'Accept': 'application/json, text/plain, */*',
                'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
                'Accept-Encoding': 'gzip, deflate, br',
                'Referer': 'https://cf.elb.seeddao.org/',
                'Telegram-Data': cookie,
                'Origin': 'https://cf.elb.seeddao.org',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-site',
                'Te': 'trailers'
            }
        })

        .then(async (res) => {
            const data = await res.json();
            return data;
        });

    return index;
}

function claimDaily(cookie) {
    const index = fetch('https://elb.seeddao.org/api/v1/login-bonuses', {
            method: 'POST',
            headers: {
                'Host': 'elb.seeddao.org',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:126.0) Gecko/20100101 Firefox/126.0',
                'Accept': 'application/json, text/plain, */*',
                'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
                'Accept-Encoding': 'gzip, deflate, br',
                'Referer': 'https://cf.elb.seeddao.org/',
                'Telegram-Data': cookie,
                'Origin': 'https://cf.elb.seeddao.org',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-site',
                'Te': 'trailers'
            }
        })

        .then(async (res) => {
            const data = await res.json();
            return data;
        });

    return index;
}

function upgradeHoly(cookie) {
    const index = fetch('https://elb.seeddao.org/api/v1/upgrades/holy-water', {
            method: 'POST',
            headers: {
                'Host': 'elb.seeddao.org',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:126.0) Gecko/20100101 Firefox/126.0',
                'Accept': 'application/json, text/plain, */*',
                'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
                'Accept-Encoding': 'gzip, deflate, br',
                'Referer': 'https://cf.elb.seeddao.org/',
                'Telegram-Data': cookie,
                'Origin': 'https://cf.elb.seeddao.org',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-site',
                'Te': 'trailers'
            }
        })

        .then(async (res) => {
            const data = await res.json();
            return data;
        });

    return index;
}

function upgradeTree(cookie) {
    const index = fetch('https://elb.seeddao.org/api/v1/seed/mining-speed/upgrade', {
            method: 'POST',
            headers: {
                'Host': 'elb.seeddao.org',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:126.0) Gecko/20100101 Firefox/126.0',
                'Accept': 'application/json, text/plain, */*',
                'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
                'Accept-Encoding': 'gzip, deflate, br',
                'Referer': 'https://cf.elb.seeddao.org/',
                'Telegram-Data': cookie,
                'Origin': 'https://cf.elb.seeddao.org',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-site',
                'Te': 'trailers'
            }
        })

        .then(async (res) => {
            const data = await res.json();
            return data;
        });

    return index;
}

function upgradeStorage(cookie) {
    const index = fetch('https://elb.seeddao.org/api/v1/seed/storage-size/upgrade', {
            method: 'POST',
            headers: {
                'Host': 'elb.seeddao.org',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:126.0) Gecko/20100101 Firefox/126.0',
                'Accept': 'application/json, text/plain, */*',
                'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
                'Accept-Encoding': 'gzip, deflate, br',
                'Referer': 'https://cf.elb.seeddao.org/',
                'Telegram-Data': cookie,
                'Origin': 'https://cf.elb.seeddao.org',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-site',
                'Te': 'trailers'
            }
        })

        .then(async (res) => {
            const data = await res.json();
            return data;
        });

    return index;
}

function claimseedHoly(cookie) {
    const index = fetch('https://elb.seeddao.org/api/v1/seed/claim', {
            method: 'POST',
            headers: {
                'Host': 'elb.seeddao.org',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:126.0) Gecko/20100101 Firefox/126.0',
                'Accept': 'application/json, text/plain, */*',
                'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
                'Accept-Encoding': 'gzip, deflate, br',
                'Referer': 'https://cf.elb.seeddao.org/',
                'Telegram-Data': cookie,
                'Origin': 'https://cf.elb.seeddao.org',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-site',
                'Te': 'trailers'
            }
        })

        .then(async (res) => {
            const data = await res.json();
            return data;
        });

    return index;
}

(async () => {
    while (true) {

        const filePath = path.join(__dirname, 'license.txt');
        if (fs.existsSync(filePath)) {} else {
            var apiKey = readlineSync.question("[+] Input License : ")
            fs.appendFileSync(filePath, apiKey);
        }

        var license = fs.readFileSync(`license.txt`, 'UTF-8');
        const licenseCheckResult = await licenseCheck(license);
        const namaBuyer = licenseCheckResult.FullName;
        const duration = licenseCheckResult.Duration;
        const MachineId1 = licenseCheckResult.MachineId1;
        const MachineId2 = licenseCheckResult.MachineId2;
        const MachineId3 = licenseCheckResult.MachineId3;
        const MachineId4 = licenseCheckResult.MachineId4;
        const MachineId5 = licenseCheckResult.MachineId5;
        const MachineId6 = licenseCheckResult.MachineId6;
        const MachineId7 = licenseCheckResult.MachineId7;
        const MachineId8 = licenseCheckResult.MachineId8;
        const MachineId9 = licenseCheckResult.MachineId9;
        const MachineId10 = licenseCheckResult.MachineId10;
        let id = machineIdSync;
        let myId = await id.machineSync({
            original: true
        });
        console.log(chalk.green('[') + chalk.white('!') + chalk.green(']'), `Machine Id :`, chalk.yellow(`${myId}`))
        if (namaBuyer) {
            console.log(chalk.white(`\nHas Found License`), chalk.green(`${namaBuyer}`), chalk.white(`Duration : `) + chalk.yellow(`${duration} Days\n`));
        } else {
            console.log(chalk.white(`\nNot Found License\n`));
            console.log(err)
            process.exit(0)
        }
        var data = `${MachineId1},${MachineId2}`;

        if (data.match(myId)) {} else {
            console.log(chalk.green('[') + chalk.white('!') + chalk.green(']'), `Not Found Machine ID On License :`, chalk.yellow(`${myId}`))
        }

        if (MachineId1 == '') {
            const addMachinez = await addMachine1(license, myId);
            console.log(chalk.green('[') + chalk.white('!') + chalk.green(']'), `Successfully Added Machine ID 1 :`, chalk.yellow(`${myId}`))
            continue;
        } else if (MachineId1 == myId) {
            console.log(chalk.green('[') + chalk.white('!') + chalk.green(']'), `Found Machine ID 1 :`, chalk.yellow(`${MachineId1}`))
            break;
        }

        if (MachineId2 == '') {
            const addMachinez = await addMachine2(license, myId);
            console.log(chalk.green('[') + chalk.white('!') + chalk.green(']'), `Successfully Added Machine ID 2 :`, chalk.yellow(`${myId}`))
            continue;
        } else if (MachineId2 == myId) {
            console.log(chalk.green('[') + chalk.white('!') + chalk.green(']'), `Found Machine ID 2 :`, chalk.yellow(`${MachineId2}`))
            break;
        }
    }

    if (fs.existsSync('loginSeed.json')) {} else {
        fs.appendFileSync("loginSeed.json", '[]');
    }
    console.log()
    console.log(chalk.yellow(`    Membership x ETL Discussion\n`))

    console.log(`    List Account Login`)
    console.log()
    var configData = fs.readFileSync(`loginSeed.json`);
    var config = JSON.parse(configData)
    const detect = config;
    var totalAccount = config.length;

    let tableData = [
        ['id', 'Telegram Username', 'Telegram ID', 'Balance']
    ];
    const configTable = {
        columns: [{
            alignment: 'center'
        }, {
            alignment: 'center'
        }, {
            alignment: 'center'
        }]
    };

    awal: for (let index = 0; index < totalAccount; index++) {
        const cookie = detect[index].cookie;
        try {
        var checkProfiledata = await checkProfile(cookie);
        } catch(err) {
            continue awal;
        }
        try {
            var name = checkProfiledata.data.name;
            var tgid = checkProfiledata.data.tg_id;
            var lastClaim = checkProfiledata.data.last_claim;
        } catch (err) {

        }

        const checkBalanceku = await checkBalance(cookie);
        const dividedNumber = checkBalanceku.data / 1000000000; // Membagi dengan 1 miliar
        const formattedNumber = dividedNumber.toFixed(6)
        try {
            var telegramName = name
            var telegramId = tgid
            var balance = `${formattedNumber} Seed`
        } catch (err) {
            console.log(err)
            var telegramName = "Account Not Login";
            var telegramId = "Account Not Login";
            var balance = "Account Not Login";
        }
        tableData.push([index, chalk.green(telegramName), telegramId, chalk.yellow(balance)])
    }
    console.log(table(tableData, configTable))


    console.log(chalk.white('[') + chalk.green('1') + chalk.white(']') + ` Input Cookie / Delete Cookie`)
    console.log(chalk.white('[') + chalk.green('2') + chalk.white(']') + ` Claim Wallet`)
    console.log(chalk.white('[') + chalk.green('3') + chalk.white(']') + ` Auto Clear All Task`)
    console.log(chalk.white('[') + chalk.green('4') + chalk.white(']') + ` Auto Upgrade Holy`)
    console.log(chalk.white('[') + chalk.green('5') + chalk.white(']') + ` Auto Upgrade Tree`)
    console.log(chalk.white('[') + chalk.green('6') + chalk.white(']') + ` Auto Upgrade Storage\n`)


    var pilihan = readlineSync.question('Vote?? ')
    console.log()
    if (pilihan == 1) {
        var dataVote = readlineSync.question('[!] Delete / Add ? : ')

        if (dataVote.toLowerCase() == "add") {
            const cookies = fs.readFileSync('cookie.txt', 'utf8')
            const list = cookies.split(/\r?\n/);
            for (var i = 0; i < list.length; i++) {
                var telegramToken = list[i].split('|')[0];
                console.log(telegramToken)
                const arrayPush = detect.push({
                    cookie: telegramToken
                });

                const checkProfiledata = await checkProfile(telegramToken);
                try {
                    var name = checkProfiledata.data.name;
                    var tgid = checkProfiledata.data.tg_id;
                    var lastClaim = checkProfiledata.data.last_claim;

                    const testlistJson = JSON.stringify(detect);
                    fs.unlinkSync(`loginSeed.json`)

                    fs.appendFileSync(`loginSeed.json`, testlistJson);
                    console.log(chalk.green('    Successfully input cookie'))
                } catch (err) {
                    console.log(chalk.green('    Failure input cookie [ Cookie Not Valid ] '))

                }
            }
        } else if (dataVote.toLowerCase() == "delete") {
            var nomor = readlineSync.question("[+] Akun Nomor                   : ");
            const deletez = delete detect[nomor]
            var hasil = detect.filter(function (a) {
                return typeof a !== 'undefined';
            });
            const testlistJson = JSON.stringify(hasil);
            fs.unlinkSync('loginSeed.json')

            fs.appendFileSync("loginSeed.json", testlistJson);
            console.log(chalk.white('[') + chalk.green(`!`) + chalk.white(']') + ` Information  => ` + chalk.yellow(`Successfully Delete Account`))
        }

    } else if (pilihan == 2) {
        awal: while (true) {
            for (let index = 0; index < totalAccount; index++) {
                const cookie = detect[index].cookie;
                try {
                    var checkProfiledata = await checkProfile(cookie);
                } catch (err) {
                    continue awal;
                }

                try {
                    var name = checkProfiledata.data.name;
                    var tgid = checkProfiledata.data.tg_id;
                    var lastClaim = checkProfiledata.data.last_claim;
                } catch (err) {

                }

                try {
                    var checkBalanceku = await checkBalance(cookie);
                } catch (err) {
                    continue awal;
                }
                const dividedNumber = checkBalanceku.data / 1000000000; // Membagi dengan 1 miliar
                const formattedNumber = dividedNumber.toFixed(6)

                console.log(chalk.white('[') + chalk.green(`${index+1}/${totalAccount}`) + chalk.white(']'), `Successfully login`, chalk.yellow(`${name}`))
                console.log(chalk.white('   '), `Last Claim      : ` + chalk.green(`${moment(lastClaim).utc().format('DD-MM-YYYY HH:mm:ss')}`))
                console.log(chalk.white('   '), `Balance         : ` + chalk.green(`${formattedNumber}`) + chalk.yellow(` Seed`))
                const nextClaimTime = moment(lastClaim).utc().add(2, 'hours').format('DD-MM-YYYY HH:mm:ss');
                console.log(chalk.white('   '), `Next Claim Time : ` + chalk.green(`${nextClaimTime}`));
                try {
                    var claimDailyKu = await claimDaily(cookie);
                } catch (err) {
                    continue awal;
                }
                var claimData = claimDailyKu.message;
                if (claimData == "already claimed for today") {
                    console.log(`    Seed Absen      : already claimed for today`)
                } else if (claimData == "rate limited") {
                    console.log(`    Rate limited`)
                } else {
                    console.log(`    Status Login Absen : ` + chalk.green(`Success`))
                }

                const currentTime = moment().utc().format('DD-MM-YYYY HH:mm:ss');
                if (currentTime == nextClaimTime) {
                    try {
                        var claimseddku = await claimseedHoly(cookie);
                    } catch (err) {
                        continue awal;
                    }
                    if (claimseddku.data) {
                        console.log(`    Status Claim    : ` + chalk.green(`Success`))
                    } else {
                        console.log(`    Status Claim    : ` + chalk.red(`${claimseddku.message}`))
                    }
                } else if (currentTime > nextClaimTime) {
                    try {
                        var claimseddku = await claimseedHoly(cookie);
                    } catch (err) {
                        continue awal;
                    }
                    if (claimseddku.data) {
                        console.log(`    Status Claim    : ` + chalk.green(`Success`))
                    } else {
                        console.log(`    Status Claim    : ` + chalk.red(`${claimseddku.message}`))
                    }
                } else {
                    console.log(`    Status Claim    : ` + chalk.yellow(`Menunggu waktu claim ${nextClaimTime}`))
                }
                console.log()
            }
        }
    }
    else if (pilihan == 3) {
        for (let index = 0; index < totalAccount; index++) {
            const cookie = detect[index].cookie;

            const checkProfiledata = await checkProfile(cookie);
            try {
                var name = checkProfiledata.data.name;
                var tgid = checkProfiledata.data.tg_id;
                var lastClaim = checkProfiledata.data.last_claim;
            } catch (err) {

            }

            const checkBalanceku = await checkBalance(cookie);
            const dividedNumber = checkBalanceku.data / 1000000000; // Membagi dengan 1 miliar
            const formattedNumber = dividedNumber.toFixed(6)

            console.log(chalk.white('[') + chalk.green('!') + chalk.white(']'), `Successfully login`, chalk.yellow(`${name}`))
            console.log(chalk.white('   '), `Last Claim : `, chalk.green(`${moment(lastClaim).utc().format('DD-MM-YYYY HH:mm:ss')}`))
            console.log(chalk.white('   '), `Balance    : `, chalk.green(`${formattedNumber}`) + chalk.yellow(` Seed`))

            console.log()
            console.log(chalk.white('   '), `Waiting Checking Task`)
            console.log()

            const checkingTask = await checkTask(cookie);

            for (let index = 0; index < checkingTask.data.length; index++) {
                var taskId = checkingTask.data[index].id;
                var type = checkingTask.data[index].type;
                var name = checkingTask.data[index].name;
                var reward_amount = checkingTask.data[index].reward_amount;
                var task_user = checkingTask.data[index].task_user;

                const rewardKu = reward_amount / 1000000000; // Membagi dengan 1 miliar
                const rewardData = rewardKu.toFixed(6)
                console.log(chalk.white('[') + chalk.green(`${index+1}/${checkingTask.data.length}`) + chalk.white(']'), `Task ID : ${taskId}`)
                console.log(`   Type   : ` + chalk.yellow(type))
                console.log(`   Name   : ` + chalk.yellow(name))
                console.log(`   Reward : ` + chalk.yellow(rewardData) + ` Seed`)

                if (task_user == null) {
                    const successTask = await claimTask(cookie, taskId);
                    const checkingTaskSuccess = successTask.data
                    if (checkingTaskSuccess) {
                        console.log(`   Status : ` + chalk.green(`Success`))
                    }
                } else if (type == "telegram-boost") {
                    console.log(`   Status : ` + chalk.red(`Failure. Please Boost Your Telegram`))
                } else if (type == "Join community") {
                    console.log(`   Status : ` + chalk.red(`Failure. Please Join Community ${name}`))
                } else if (type == "refer-premium") {
                    console.log(`   Status : ` + chalk.red(`Failure. Please Reffer U Seed`))
                } else {
                    console.log(`   Status : ` + chalk.magenta(`Already Claim Task`))
                }
            }

            console.log()
            const checkingTaskHolly = await checkTaskHoly(cookie);

            for (let index = 0; index < checkingTaskHolly.data.length; index++) {
                var taskId = checkingTaskHolly.data[index].id;
                var type = checkingTaskHolly.data[index].type;
                var name = checkingTaskHolly.data[index].name;
                var task_user = checkingTaskHolly.data[index].task_user;

                console.log(chalk.white('[') + chalk.green(`${index+1}/${checkingTask.data.length}`) + chalk.white(']'), `Task ID : ${taskId}`)
                console.log(`   Type   : ` + chalk.yellow(type))
                console.log(`   Name   : ` + chalk.yellow(name))

                if (task_user == null) {
                    const successTask = await claimTaskHoly(cookie, taskId);
                    console.log(successTask)
                    const checkingTaskSuccess = successTask.data
                    if (checkingTaskSuccess) {
                        console.log(`   Status : ` + chalk.green(`Success`))
                    }
                } else if (type == "telegram-boost") {
                    console.log(`   Status : ` + chalk.red(`Failure. Please Boost Your Telegram`))
                } else if (type == "Join community") {
                    console.log(`   Status : ` + chalk.red(`Failure. Please Join Community ${name}`))
                } else if (type == "refer-premium") {
                    console.log(`   Status : ` + chalk.red(`Failure. Please Reffer U Seed`))
                } else {
                    console.log(`   Status : ` + chalk.magenta(`Already Claim Task`))
                }
            }

            console.log()
            console.log(`   Information : ` + chalk.green(`Waiting Delay 5 sec`))
            console.log()
            await delay(5000)
        }
    } else if (pilihan == 4) {
        for (let index = 0; index < totalAccount; index++) {
            const cookie = detect[index].cookie;
            const checkProfiledata = await checkProfile(cookie);
            try {
                var name = checkProfiledata.data.name;
                var tgid = checkProfiledata.data.tg_id;
                var lastClaim = checkProfiledata.data.last_claim;
            } catch (err) {

            }

            const checkBalanceku = await checkBalance(cookie);
            const dividedNumber = checkBalanceku.data / 1000000000; // Membagi dengan 1 miliar
            const formattedNumber = dividedNumber.toFixed(6)

            console.log(chalk.white('[') + chalk.green(`${index+1}/${totalAccount}`) + chalk.white(']'), `Successfully login`, chalk.yellow(`${name}`))
            console.log(chalk.white('   '), `Last Claim      : ` + chalk.green(`${moment(lastClaim).utc().format('DD-MM-YYYY HH:mm:ss')}`))
            console.log(chalk.white('   '), `Balance         : ` + chalk.green(`${formattedNumber}`) + chalk.yellow(` Seed`))

            const upgrade = await upgradeHoly(cookie);
            if (upgrade.message) {
                console.log(`    ${upgrade.message}`)
            } else {
                console.log(`    ` + chalk.green(`Upgrade Success`))
            }
            console.log()
            console.log(`   Information : ` + chalk.green(`Waiting Delay 5 sec`))
            console.log()
            await delay(5000)
        }
    } else if (pilihan == 5) {
        for (let index = 0; index < totalAccount; index++) {
            const cookie = detect[index].cookie;
            const checkProfiledata = await checkProfile(cookie);
            try {
                var name = checkProfiledata.data.name;
                var tgid = checkProfiledata.data.tg_id;
                var lastClaim = checkProfiledata.data.last_claim;
            } catch (err) {

            }

            const checkBalanceku = await checkBalance(cookie);
            const dividedNumber = checkBalanceku.data / 1000000000; // Membagi dengan 1 miliar
            const formattedNumber = dividedNumber.toFixed(6)

            console.log(chalk.white('[') + chalk.green(`${index+1}/${totalAccount}`) + chalk.white(']'), `Successfully login`, chalk.yellow(`${name}`))
            console.log(chalk.white('   '), `Last Claim      : ` + chalk.green(`${moment(lastClaim).utc().format('DD-MM-YYYY HH:mm:ss')}`))
            console.log(chalk.white('   '), `Balance         : ` + chalk.green(`${formattedNumber}`) + chalk.yellow(` Seed`))

            const upgrade = await upgradeTree(cookie);
            if (upgrade.message) {
                console.log(`    ${upgrade.message}`)
            } else {
                console.log(`    ` + chalk.green(`Upgrade Success`))
            }
            console.log()
            console.log(`   Information : ` + chalk.green(`Waiting Delay 5 sec`))
            console.log()
            await delay(5000)
        }
    } else if (pilihan == 6) {
        for (let index = 0; index < totalAccount; index++) {
            const cookie = detect[index].cookie;
            const checkProfiledata = await checkProfile(cookie);
            try {
                var name = checkProfiledata.data.name;
                var tgid = checkProfiledata.data.tg_id;
                var lastClaim = checkProfiledata.data.last_claim;
            } catch (err) {

            }

            const checkBalanceku = await checkBalance(cookie);
            const dividedNumber = checkBalanceku.data / 1000000000; // Membagi dengan 1 miliar
            const formattedNumber = dividedNumber.toFixed(6)

            console.log(chalk.white('[') + chalk.green(`${index+1}/${totalAccount}`) + chalk.white(']'), `Successfully login`, chalk.yellow(`${name}`))
            console.log(chalk.white('   '), `Last Claim      : ` + chalk.green(`${moment(lastClaim).utc().format('DD-MM-YYYY HH:mm:ss')}`))
            console.log(chalk.white('   '), `Balance         : ` + chalk.green(`${formattedNumber}`) + chalk.yellow(` Seed`))

            const upgrade = await upgradeStorage(cookie);
            if (upgrade.message) {
                console.log(`    ${upgrade.message}`)
            } else {
                console.log(`    ` + chalk.green(`Upgrade Success`))
            }
            console.log()
            console.log(`   Information : ` + chalk.green(`Waiting Delay 5 sec`))
            console.log()
            await delay(5000)

        }
    }
})();


function licenseCheck(license) {
    var license = fetch(`https://whitelist-bot.com/api.php?license=${license}`, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9",
                "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "none",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1",
                "cookie": "_ga=GA1.2.1441011143.1656930356"
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET"
        })

        .then(async res => {
            const data = await res.json()
            return data
        })
    return license
}



function licenseCheck(license) {
    var license = fetch(`https://whitelist-bot.com/api.php?license=${license}`, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9",
                "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "none",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1",
                "cookie": "_ga=GA1.2.1441011143.1656930356"
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET"
        })

        .then(async res => {
            const data = await res.json()
            return data
        })
    return license
}

function addMachine1(license, machine) {
    var license = fetch(`https://whitelist-bot.com/rahasiaku/editmachine.php?license=${license}`, {
        method: 'POST',
        headers: {
            'Host': 'whitelist-bot.com',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
            'Origin': 'https://whitelist-bot.com',
            'Referer': 'https://whitelist-bot.com/rahasiaku/',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-User': '?1',
            'Te': 'trailers'
        },
        body: new URLSearchParams({
            'MachineId1': machine
        })
    })
}

function addMachine2(license, machine) {
    var license = fetch(`https://whitelist-bot.com/rahasiaku/editmachine.php?license=${license}`, {
        method: 'POST',
        headers: {
            'Host': 'whitelist-bot.com',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
            'Origin': 'https://whitelist-bot.com',
            'Referer': 'https://whitelist-bot.com/rahasiaku/',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-User': '?1',
            'Te': 'trailers'
        },
        body: new URLSearchParams({
            'MachineId2': machine
        })
    })
}

function getCurrentDateTime() {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const formattedDate = `\x1b[35m${hours}:${minutes}:${seconds}\x1b[0m`;
    return formattedDate;
}

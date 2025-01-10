const statusRef = document.querySelector('.status');

function getSubscriptionsStatus() {
    return new Promise((resolve, reject) => {
        resolve('VIP');
    });
}

// // method 1 = then
// getSubscriptionsStatus().then((status) => {console.log(status)});

// method 2  = acync/await
async function main() {
    statusRef.innerHTML = await getSubscriptionsStatus();
}

main()
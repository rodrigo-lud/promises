function getSubscriptionsStatus() {
    return new Promise((resolve, reject) => {
        resolve('VIP');
        // resolve('NOT_FOUND');
    });
}

/**
 * Exercise
 * 1. Create a new function called getVideo
 * 2. Accept parameter called subscriptionStatus
 * 3. Return a new Promise that
 *  a. if 'VIP' resolve "show video"
 *  b. if 'FREE' resolve "show trailer"
 *  c. otherwise reject with "no video available"
 * 4. console.log the result of getVideo(status)
*/

function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === 'VIP') {
            resolve('show video');
        } else if (subscriptionStatus === 'FREE') {
            resolve('show trailer');
        } else {
            reject('no video available');
        }
    });
}

async function main() {
    const status = await getSubscriptionsStatus();
    try {
        console.log(await getVideo(status));
    } catch (e) {
        console.log(e);
    }
}

main()
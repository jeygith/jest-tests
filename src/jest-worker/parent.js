const {jestWorker} = require('jest-worker');
import Worker from 'jest-worker';


console.log(new jestWorker());

// let main;
main = async () => {
    const worker = new jestWorker(require.resolve('./worker.js'));
    const result = await worker.hello('Alice');
}

main();

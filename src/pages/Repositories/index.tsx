import qs from 'qs';

const Repositories = () => {
    const obj = {
        name: 'jake',
        age: 10,
        aa: undefined,
    }
    return (
        <div>Repositories
            {qs.stringify(obj)}
        </div>
    )
}

export default Repositories;

export default function ContainerBing(props) {
    console.log(props.data)

    const listData = () => {
        return props.data.map(function (item) {
            return <div><a className="title" href={item.url}>{item.displayText}</a><br/><a href={item.url}>{item.url}</a><p className="border-bottom"></p></div>
        })
    }
    return (listData());
}


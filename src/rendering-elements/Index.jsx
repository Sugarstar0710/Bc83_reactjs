
export default function Renderingelements() {

    let message ="Hello world";
    let username ="Nguyen";
    let age = 18;
    const newS =()=> {
        return (
            <div>
                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum nihil maiores dolor corporis nemo molestiae aliquam cupiditate ut quibusdam ipsum.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, repudiandae eos aspernatur non obcaecati nihil asperiores ab consectetur officia.</p>
            </div>
        )
    }
  return (
    <div>
        <h1>RenderingElements</h1>
        <div>{message}</div>
        <div>Username: {username} Age: {age}</div>
        {newS()}
    </div>
  );
}

import React, {useState, useRef} from 'react'

export default function Home() {
    const [error, setError] = useState<string>("")
    const input1 = useRef<HTMLInputElement>(null)
    const input2 = useRef<HTMLInputElement>(null)

    const onClick = async () => {
        if (input1.current!.value === "" || input2.current!.value === "") {
            setError("Please fill out the form")
            return
        }

        if (input1.current!.value !== input2.current!.value) {
            setError("Passwords don't match")
            return
        }

        try {
            await fetch("http://localhost:3002/api/user", {
                method: "PUT",
                body: JSON.stringify({password: input1.current!.value, username: "SMUser01"})
            })
            setError("")
        } catch(_e) {
            setError("Failed to update password.")
        }
    }

    const onChange = () => {
        if (input1.current!.value !== input2.current!.value) {
            setError("Passwords don't match")
        } else {
            setError("")
        }
    }

    return (
        <div>
            <input ref={input1} type="password"placeholder="New Password" onChange={onChange} />
            <br/>
            <input ref={input2} type="password" placeholder="Confirm Password" onChange={onChange} />
            <br/>
            <button onClick={onClick}>Submit</button>
            <br/>
            { error && <span>{error}</span> }
        </div>
    )
}

/*button{font-size: 25px;}
            #posts:hover, #fileUploadPosting:hover{
                cursor: default;
            }
            #posts{
                width: 80%;
                min-height: 150px;
                overflow: auto;
                background: #0f0;
                margin: auto;
                margin-top: 10px;
                margin-bottom: 20px;
                padding: 10px;
                max-height: 1000px;
                border-radius: 30px;
            }
            #posts h1{
                line-height: 1px;
            }
            #add{
                margin: 20px;
            }
            #add:hover{
                cursor: pointer;
            }
            #plusAdd{
                display: none;
                background: #00f;
                width: 80%;
                height: 50%;
                position: fixed;
                top: 20%;
                left: 10%;
                border: 5px solid #000;
                overflow: auto;
            }
            #plusAdd textarea{
                width: 899px;
                height: 118px;
                resize: none;
            }
            #postArea{
                border: 2px solid #000;
            }
            #postArea{
                cursor: default;
            }
            #previewImg{
                max-width: 900px;
                max-height: 500px;
            }
            #yourPosts{
                background: #0ff;
            }


            $postDetails .= "<div style='border:5px solid black;'> <h2>$u</h2><h4>$datePost</h4><p>$txtWrite</p>";
            foreach($post as $key => $value){
                if($key == 'username' || $key == 'user' || $key == 'text_written' || $key == 'date_posted' || $key == 'img' || $key == 'post_id'){
                    continue;
                }
                if ($key == 'img') {
                    $postDetails .= '<img src="/images/uploads/'.$value.'">';
                }
                $postDetails .= "<div style='border: 1px solid grey; height: 20px;'>";
                $postDetails .= "<div style='display:inline-block;min-width: 100px;'>$key</div><div style='display:inline-block;'>$value</div>";
                $postDetails .= "</div>";
            }
            $postDetails .= "</div>"


            <div id="content">
            <div id="posts">
                <h1>All Posts</h1>
                <div id="yourPosts">
                    {$postDetails}
                </div>
            </div>
        </div>*/
export default function Home() {
    return (
        <>
            <div className="navbar bg-base-100">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="mockup-code">
                <pre data-prefix="$">
                    <code>npm i daisyui</code>
                </pre>
                <pre data-prefix=">" className="text-warning">
                    <code>installing...</code>
                </pre>
                <pre data-prefix=">" className="text-success">
                    <code>Done!</code>
                </pre>
            </div>
        </>
    )
}

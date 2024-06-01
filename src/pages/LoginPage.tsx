import { useForm } from "react-hook-form";

function LoginPage() {
    const { register, handleSubmit } = useForm();

    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            <form
                onSubmit={handleSubmit((values) => {
                    console.log(values);
                })}
            >
                <input
                    type="text"
                    {...register("username", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                />
                <input
                    type="password"
                    {...register("password", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;

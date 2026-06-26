import Button from "../component/Button/Button";
import Input from "../component/Input/Input";
import AppLogo from '../assets/app_logo.svg'
import { useForm ,type SubmitHandler, type SubmitErrorHandler} from "react-hook-form";
import { loginSchema, type LoginSchema } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginPage() {

    const {register,handleSubmit}  = useForm<LoginSchema>({
        resolver : zodResolver(loginSchema)
    })

    const onSubmit:SubmitHandler<LoginSchema> = (data)=>{
        console.log(data)
    }

    const onError:SubmitErrorHandler<LoginSchema> = (error)=>{
        console.error(error)
    }

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
       <div className="flex flex-col gap-4 shadow-lg rounded-lg p-8!">
            <img src={AppLogo} alt="AppLogo" loading="lazy" height={'64px'} width={'64px'}/>
            <h1>India's last minutes app</h1> 
            <p>Login or signin app</p>

            <form onSubmit={handleSubmit(onSubmit,onError)}>
            <Input
                type="email"
                inputMode="numeric"
                placeholder="Enter your email"
                {...register('phoneNumber')}
            />

            <Button mode="Primary" title="Login" />
            </form>

       </div> 
    </div>
  )
}

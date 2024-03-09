import { Button } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "../redux/features/Auth/authApi";
import { useAppDispatch } from "../redux/Hooks";
import { setUser } from "../redux/features/Auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { TUser } from "../types/Type";
type Inputs = {
  userId: string;
  password: string;
};
const Login = () => {
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      userId: "A-0001",
      password: "admin123",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const toastId = toast.loading("logging");

    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: {}, token: res.data.accessToken }));
      toast.success("Successfully Login", { id: toastId });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("somthig went wrong", { id: toastId });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>This is Login pages</h1>
      <div>
        <label>ID:</label>
        <input {...register("userId")} />
      </div>
      <div>
        <label htmlFor="">Password:</label>
        <input {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};
export default Login;

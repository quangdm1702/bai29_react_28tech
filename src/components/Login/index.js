function Login() {
  const isLogin = true;
  return (
    <>
      {isLogin ? (<>
        <div>
          Thông tin người dùng, nút logout
        </div>
      </>) : (<>
        <div>
          Nút đăng nhập , nút đăng kí
        </div>
      </>)}

      {/* {isLogin ? (<>
        <div>Avatar</div>
      </>) : (<>
        <></>
      </>)} */}

      {isLogin && <div>Avatar</div>}
    </>
  );
}

export default Login;
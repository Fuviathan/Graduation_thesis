export const Description = ({ description }) => {
  return (
    <div className="mt-2 max-w-[1320px] mx-auto">
      <div className="bg-white ">
        <h4 className="text-3xl font-semibold">Giới thiệu sản phẩm</h4>
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></div>
      </div>
    </div>
  );
};

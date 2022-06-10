export const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next)?.catch(next);
  };
};
// const use_ = (fn) => (req, res, next) => {
//   try {
//     fn(req, res, next);
//   } catch (error) {
//     next();
//   }
//   // Promise.resolve().catch(next());
// };

// export default use_;

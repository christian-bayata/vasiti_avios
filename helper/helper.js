/**
 * @Responsibility - helps to run the action and raises an error if action is not properly implemented
 * @param action
 * @param next
 *
 */

const helper = async (action, next) => {
  try {
    await action();
  } catch (err) {
    next(err);
  }
};

export default helper;

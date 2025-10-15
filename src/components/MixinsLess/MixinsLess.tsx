import Style from './MixinsLess.module.less';

export default function MixinsLess() {
  return (
    <div className={Style.testLess}>
      MixinsLess
      <div className={Style.minx}>testMixins</div>
    </div>
  );
}

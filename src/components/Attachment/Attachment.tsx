import React from 'react';
import './Attachment.less';
import { Modal } from 'antd';
import CarouselWrap from './CarouselWrap';

const Attachment: React.FC<{
  AnnexList: string[];
  showModel: boolean;
  onClose: () => void;
}> = ({ AnnexList, showModel = false, onClose }) => {
  return (
    <>
      <Modal
        className="attachment-model"
        visible={showModel}
        footer={null}
        onCancel={onClose}
        width={1200}
        style={{
          background: 'transparent',
        }}
        centered
        closable={false}
      >
        <CarouselWrap AnnexList={AnnexList} />
      </Modal>
    </>
  );
};

export default Attachment;

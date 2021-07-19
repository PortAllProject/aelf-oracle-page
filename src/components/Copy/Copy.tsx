import { Button, Tooltip } from 'antd';
import { useCopyToClipboard } from 'react-use';
import { CopyOutlined, CheckCircleOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import './Copy.less';

const Copy: React.FC<{ toCopy: string; children?: React.ReactNode }> = ({
  toCopy,
  children,
}: {
  toCopy: string;
  children?: React.ReactNode;
}) => {
  const [, setCopied] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState<boolean>(false);
  useEffect(() => {
    if (isCopied) {
      const hide = setTimeout(() => {
        setIsCopied(false);
      }, 1000);
      return () => {
        clearTimeout(hide);
      };
    } else {
      return;
    }
  }, [isCopied, setIsCopied]);
  return (
    <Button
      onClick={() => {
        setCopied(toCopy);
        setIsCopied(true);
      }}
    >
      {isCopied ? (
        <Tooltip placement="top" title={'已复制'} defaultVisible>
          <CheckCircleOutlined />
        </Tooltip>
      ) : (
        <>
          <Tooltip placement="top" title={'复制'}>
            <CopyOutlined />
            &nbsp;
            {children}
          </Tooltip>
        </>
      )}
    </Button>
  );
};

export default Copy;

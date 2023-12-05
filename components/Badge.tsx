import React from 'react';
import styles from './badge.module.css';
import clsx from 'clsx';

interface BadgeProps {
	type: "danger" | "warning" | "info";
	children: React.ReactNode;
}

export default function Badge({ type, children }: BadgeProps) {
	return (
		<span className={clsx(styles.badge, styles[`badge-${type}`])}>
			{children}
		</span>
	)
}